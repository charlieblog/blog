const audioList=[],isFixed="fixed"==Global.theme_config.plugins.aplayer.type,isMini="mini"==Global.theme_config.plugins.aplayer.type;for(const e of Global.theme_config.plugins.aplayer.audios){const i={name:e.name,artist:e.artist,url:e.url,cover:e.cover,lrc:e.lrc,theme:e.theme};audioList.push(i)}if(isMini){new APlayer({container:document.getElementById("aplayer"),mini:!0,audio:audioList})}else if(isFixed){new APlayer({container:document.getElementById("aplayer"),fixed:!0,audio:audioList})}