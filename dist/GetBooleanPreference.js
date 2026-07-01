// Client Action: GetBooleanPreference
// Input:  Key (Text), DefaultValue (Boolean)
// Output: bool (Boolean)
let bool = false;

ExtensibilityPreferences.getBoolean(
    $parameters.Key,
    $parameters.DefaultValue,
    function (value) {
       bool = value;
        $resolve();
    },
    function () {
        $resolve();
    }
);
