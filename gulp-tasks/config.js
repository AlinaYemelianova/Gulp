const projectFolder = 'dist',
    sourceFolder = '#src';

module.exports = gulpVariables = {
    projectFolder: projectFolder,
    sourceFolder: sourceFolder,
    path: {
        build: {
            html: `${projectFolder}/`,
            css: `${projectFolder}/css/`,
            js: `${projectFolder}/js/`,
            img: `${projectFolder}/img/`,
            fonts: `${projectFolder}/fonts/`,
        },
        src: {
            html: `${sourceFolder}/index.html`,
            css: `${sourceFolder}/scss/style.scss`,
            js: `${sourceFolder}/js/script.js`,
            img: `${sourceFolder}/img/**/*.{jpg,png,svg,gif,ico}`,
            fonts: `${sourceFolder}/fonts/*.ttf`,
        },
        watch: {
            html: `${sourceFolder}/**/*.html`,
            css: `${sourceFolder}/scss/**/*.scss`,
            js: `${sourceFolder}/js/**/*.js`,
            img: `${sourceFolder}/img/**/*.{jpg,png,svg,gif,ico}`,
        },
        clean: `./${projectFolder}/`
    },
};
