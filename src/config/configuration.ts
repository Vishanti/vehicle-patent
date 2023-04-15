import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

let YAML_CONFIG_FILENAME = 'configuration.yaml';

export default () => {
  if (process.env.CONFIG) {
    return yaml.load(
      readFileSync(process.env.CONFIG, 'utf8'),
    ) as Record<string, any>;
  }
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};
