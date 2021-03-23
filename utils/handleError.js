export default (callback, arg) => {
  setTimeout(() => {
    callback(arg)
  }, 5000)
}
