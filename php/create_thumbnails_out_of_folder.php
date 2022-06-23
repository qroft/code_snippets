function createThumbs( $pathToImages, $pathToThumbs, $thumbWidth ){
  $dir = opendir( $pathToImages );
  
  // loop through dir looking for any/all JPG files:
  while (false !== ($fname = readdir( $dir ))) {

    // parse path for the extension
    $info = pathinfo($pathToImages . $fname);

    // continue only if this is a JPEG image
    if ( strtolower($info['extension']) == 'gif' ){
      echo "Creating thumbnail for {$fname}";
    
      // load image and get image size
      $img = imagecreatefromgif( "{$pathToImages}{$fname}" );
      $width = imagesx( $img );
      $height = imagesy( $img );

      // calculate thumbnail size
      $new_width = $thumbWidth;
      $new_height = floor( $height * ( $thumbWidth / $width ) );

      // create a new temporary image
      $tmp_img = imagecreatetruecolor( $new_width, $new_height );

      // copy and resize old image into new image
      imagecopyresized( $tmp_img, $img, 0, 0, 0, 0, $new_width, $new_height, $width, $height );

      // save thumbnail into a file
      imagejpeg( $tmp_img, "{$pathToThumbs}{$fname}" );
    }
  }
  closedir( $dir );
}
createThumbs("graveyard/1000/","graveyard/1000/thumbs/",80);

</pre>
