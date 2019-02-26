// tslint:disable no-console

async function main () {
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
