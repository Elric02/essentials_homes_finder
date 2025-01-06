var filenames = <?php $out = array();
foreach (glob('file/*.yml') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}
echo json_encode($out); ?>;