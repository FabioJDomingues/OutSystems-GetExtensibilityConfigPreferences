// Client Action: GetPreferences
// Input:  Keys (Text) — comma-separated preference names, e.g. "NewBranding,EnableBetaFeatures"
// Output: preferences (JSON Object) — JSON object

let preferences = {};

var keys = $parameters.Keys
    .split(',')
    .map(function (key) { return key.trim(); })
    .filter(function (key) { return key.length > 0; });

if (keys.length === 0) {
    $resolve();
    return;
}

ExtensibilityPreferences.get(
    keys,
    function (result) {
        preferences = result || {};
        $resolve();
    },
    function () {
        $resolve();
    }
);
