
const gulp = require("gulp");
const fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function() {
    return gulp.src([
        "./app/src/sub/timex.html",
        "./app/src/sub/bangbang.html"
    ])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
        }))
    .pipe(gulp.dest('./docs/sub')); //변환한 파일의 저장 위치 지정
});
gulp.task( "default", 
    gulp.parallel("fileinclude")
);