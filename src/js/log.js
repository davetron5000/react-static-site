export default function(logging_source) {
  return function(message) {
    console.log(`[ ${logging_source} ] ${message}`);
  };
}
