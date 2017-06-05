  import os from 'os'

//BLANK

  export default {
    data() {
      return {
        platform: os.platform(),
        versions: process.versions
      }
    }
  }