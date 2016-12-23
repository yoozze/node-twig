var exec = require('child_process').exec;
var colors = require('colors');

// Download and instal Composer and dependencies
console.log('Downloading Composer...'.yellow);
exec('php -r "copy(\'https://getcomposer.org/installer\', \'composer-setup.php\');"', function (error, stdout) {
  if (error) {
    console.log(error);
    return;
  }

  console.log('Finished downloading Composer!'.green);
  console.log('Installing Composer...'.yellow);
  exec('php composer-setup.php', function (error, stdout) {
    if (error) {
      console.log(error);
      return;
    }

    console.log('Finished installing Composer!'.green);
    console.log('Installing Composer dependencies...'.yellow);
    exec('php ./composer.phar install --no-dev', function (error, stdout) {
      if (error) {
        console.log(error);
        return;
      }

      console.log('Finished installing Composer dependencies!'.green);
      console.log('Deleting Composer...'.yellow);
      exec('php -r "unlink(\'composer-setup.php\'); unlink(\'composer.phar\');"', function (error, stdout) {
        if (error) {
          console.log(error);
          return;
        }

        console.log('Finished deleting Composer!'.green);
      });
    });
  });
});
