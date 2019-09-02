const chunk = chunkSize => numberToChunk => {
    const chunks = Array(Math.floor(numberToChunk / chunkSize)).fill(
      chunkSize
    );
    
    const remainder = numberToChunk % chunkSize;
  
    return remainder > 0 ? [...chunks, remainder] : chunks;
  };