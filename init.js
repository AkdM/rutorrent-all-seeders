if (plugin.canChangeColumns()) {
  plugin.config = theWebUI.config;
  theWebUI.config = function(data) {
    // Add the column to the torrent list
    theWebUI.tables.trt.columns.push({text: 'All Seeders', width: '100px', id: 'seeds_all', type: TYPE_NUMBER});
    
    plugin.config.call(this, data);
  }
}

plugin.onRemove = function() {
  theWebUI.getTable("trt").removeColumnById("seeds_all");
}
