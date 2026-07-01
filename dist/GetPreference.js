// Client Action: GetPreference
// Input:  Key (Text)
// Output: preferenceValue (Text)

let preferenceValue = '';

ExtensibilityPreferences.getString(
    $parameters.Key,
    function (value) {
        if (value !== null && value !== undefined && value !== '') {
            preferenceValue = value;
        }
        $resolve();
    },
    function () {
        $resolve();
    }
);
