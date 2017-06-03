  import os from 'os'

  $(document).ready(function () {
    $('#modal1').modal('open');
  });

  export default {
    data() {
      return {
        platform: os.platform(),
        versions: process.versions
      }
    }
  }