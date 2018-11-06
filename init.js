if (plugin.canChangeColumns()) {
  plugin.config = theWebUI.config;
  theWebUI.config = function(data) {
    // Add the column to the torrent list
    theWebUI.tables.trt.columns.push({text: 'All Seeders', width: '100px', id: 'all_seeders', type: TYPE_NUMBER});
    
    // Add the data to the torrent
    theWebUI.webui_addTorrents = theWebUI.addTorrents;
    theWebUI.addTorrents = function(data) {
      $.each(data.torrents, function(hash, torrent) {
        torrent.all_seeders = parseInt(torrent.seeds_all)
      });
      theWebUI.webui_addTorrents(data);
    }
    plugin.config.call(this, data);
  }
}

plugin.onRemove = function() {
  theWebUI.getTable("trt").removeColumnById("all_seeders");
}