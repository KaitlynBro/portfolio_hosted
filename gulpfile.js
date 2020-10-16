var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

function defaultTask(cb) {
    // place code for your default task here
    console.log('Hello Zell');
    gulp.task('sass', function(){
        return gulp.src('source-files')
          .pipe(sass()) // Using gulp-sass
          .pipe(gulp.dest('destination'))
      });
    cb();
  }
  
  
  exports.default = defaultTask

