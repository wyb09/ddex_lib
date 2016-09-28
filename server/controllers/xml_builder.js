

function* build() {
  this.body = 'yo';
}

function* release() {
  this.body = 'hey';
}



module.exports = {
  build: build,
  release: release
}
