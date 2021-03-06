import express from 'express';
import config from 'config';
import { exec, execSync } from 'child_process';

const router = express.Router(); // eslint-disable-line babel/new-cap

router.post('/', (req, res, next) => {
  try {
    let values = {};

    for (const key of Object.keys(req.body)) {
      let value = req.body[key];

      if (typeof(value) === "boolean") {
        value = value ? 1 : 0;
      }

      if ("" === value) {
        continue;
      }

      values[key] = value;
    }

    for (const key in values) {
      execSync(`${config.get('recalbox.systemSettingsCommand')} -command save -key ${key} -value ${values[key]}`);
    }

    if (undefined !== values['audio.volume'] && 'production' === req.app.get('env')) {
      // Set volume
      exec(`${config.get('recalbox.configScript')} volume ${values['audio.volume']}`, (error) => {
        if (error) {
          console.error(`exec error: ${error}`);
        }
      });
    }

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

export default router;
