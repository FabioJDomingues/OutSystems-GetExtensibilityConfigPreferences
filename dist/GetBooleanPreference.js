// Client Action: GetBooleanPreference
// Input:  Key (Text), DefaultValue (Boolean)
// Output: Value (Boolean)

let output = false;

ExtensibilityPreferences.getBoolean(
    $parameters.Key,
    $parameters.DefaultValue,
    function (value) {
       output = value;
        $resolve();
    },
    function () {
        $resolve();
    }
);
