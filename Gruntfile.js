module.exports = function (grunt) {
    require("time-grunt")(grunt);
    require("jit-grunt")(grunt, {
        buildcontrol: "grunt-build-control"
    });
    
    var config = {
        pkg: grunt.file.readJSON("package.json"),
        
        paths: {
            src: "lib",
            build: "dist",
            temp: "tmp",
            test: "test"
        },
        
        options: {
            dev: grunt.option("dev")
        }
    };
    
    //#region Typings

    config.typingscopy = {
        dist: {
            options: {
                version: "<%= pkg.version %>"
            },
            files: [
                {
                    expand: true,
                    cwd: "<%= paths.src %>",
                    src: ["**/typings.json"],
                    dest: "<%= paths.build %>"
                }, {
                    src: ["typings.json"],
                    dest: "<%= paths.build %>/typings.json"
                }
            ]
        }
    };

    config.typingsconcat = {
        dist: {
            files: [{
                expand: true,
                cwd: "<%= paths.src %>",
                src: ["**/index.d.ts"],
                dest: "<%= paths.build %>"
            }]
        }
    };

    //#endregion
    
    //#region Copy

    config.copy = {
        dist: {
            files: [
                {
                    expand: true,
                    src: ["README.md", "LICENSE"],
                    dest: "<%= paths.build %>"
                }
            ]
        }
    };

    //#endregion
    
    //#region Clean

    config.clean = {
        dist: "<%= paths.build %>",
        temp: "<%= paths.temp %>",
        dev: "<%= paths.src %>/**/*.{js,js.map}",
        test: [
            "<%= clean.dev %>",
            "<%= paths.test %>/**/*.{js,js.map,d.ts}",
            "!<%= paths.test %>/typings/**/*.d.ts"
        ]
    };

    //#endregion
    
    //#region Publish

    config.buildcontrol = {
        options: {
            commit: true,
            push: true,
            tag: "<%= pkg.version %>",
            remote: "<%= pkg.repository.url %>",
            branch: "release"
        },
        
        dist: {
            options: {
                dir: "<%= paths.build %>",
                message: "Release v<%= pkg.version %>"
            }
        }
    };
    
    //#endregion
    
    //#region Custom Tasks
    
    grunt.registerMultiTask("typingscopy", "Copy typings.json files by ensuring version number", function() {
        var options = this.options({});
        
        this.files.forEach(function(file) {
            var src = file.src[0],
                typings = grunt.file.readJSON(src);
            
            typings.version = options.version;
            
            grunt.file.write(file.dest, JSON.stringify(typings, null, 2));
            grunt.log.ok(file.src + " ==> " + file.dest);
        });
    });
    
    grunt.registerMultiTask("typingsconcat", "Concatenate global typings before publishing", function() {
        this.files.forEach(function(file) {
            var content = file.src.reduce(function (prev, src) {
                var fileContent = grunt.file.read(src);
                return prev + insertReferences(src, fileContent);
            }, "");
            
            grunt.file.write(file.dest, content);
            grunt.log.ok(file.dest + " created!");
        });
    });
    
    var 
        path = require("path"),
        BASE_COMMENT_REGEX = /^\/\/\s+.*\r?\n/,
        REFERENCE_REGEX = /\/\/\/\s*<reference\s*path="([^"]+)"\s*\/>\s*\r?\n?/g;
    
    function stripBaseComments(content) {
        while (BASE_COMMENT_REGEX.test(content)) {
            content = content.replace(BASE_COMMENT_REGEX, "");
        }
        
        return content;
    }
    
    function insertReferences(name, content, cache) {
        cache = cache || {};
        var dirPath = path.dirname(name);
        
        return content.replace(REFERENCE_REGEX, function(val, refPath) {
            refPath = path.join(dirPath, refPath);
            if (cache[refPath]) {
                return "";
            }
            
            cache[refPath] = true;
            
            var refContent = grunt.file.read(refPath);
            refContent = stripBaseComments(refContent);
            
            return insertReferences(refPath, refContent, cache);
        });
    }
    
    //#endregion

    grunt.initConfig(config);

    grunt.registerTask("build", ["clean:dist", "copy:dist", "typingscopy:dist", "typingsconcat:dist"]);
    grunt.registerTask("pretest", ["build", "clean:test"]);
    
    grunt.registerTask("publish", ["build", "buildcontrol:dist"]);

    grunt.registerTask("default", ["build"]);
};