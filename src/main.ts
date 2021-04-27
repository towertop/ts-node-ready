// tslint:disable no-console
import path from 'path';
import semver from 'semver';

async function checkNodeEngine () {
  const packageJson = require(path.resolve(process.cwd(), 'package.json'));
  const nodeRange = packageJson?.engines?.node;
  if (nodeRange) {
    const nodeVersion = process.version.substring(1);
    return [semver.satisfies(nodeVersion, nodeRange), nodeVersion, nodeRange];
  }
  return [true, '', ''];
}

export async function main () {
  const [isSatisfied, version, range] = await checkNodeEngine();
  if (!isSatisfied) {
    console.warn(`current node version ${version} do not satisfy ${range}`);
  }
  console.log('Hello World');
}

if (require.main === module) {
  main().then(
    () => {
      console.log('success!');
    },
    (err) => {
      console.error(err);
    }
  );
}
