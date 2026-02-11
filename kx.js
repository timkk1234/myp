let url = $request.url;

// 只将 ecpm= 后面的数值改为 35000.00
let newUrl = url.replace(/(ecpm=)[^&]+/, '$135000.00');

$done({ url: newUrl });