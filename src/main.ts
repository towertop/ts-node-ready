// tslint:disable no-console
// import path from 'path';
import semver from 'semver';
import { engines as packageEngines, name as packageName } from '../package.json';

function checkNodeEngine (): [boolean, string, string] {
  const nodeRange = packageEngines?.node;
  if (nodeRange) {
    const nodeVersion = process.version.substring(1);
    return [semver.satisfies(nodeVersion, nodeRange), nodeVersion, nodeRange];
  }
  return [true, '', ''];
}

export async function main () {
  console.log('Hello World');
}

if (require.main === module) {
  const [isSatisfied, version, range] = checkNodeEngine();
  if (!isSatisfied) {
    console.warn(`current node version ${version} do not satisfy ${range}`);
  }
  main().then(
    () => {
      console.log(`${packageName} success!`);
    },
    (err) => {
      console.error(err);
      process.exit(1);
    }
  );
}
