BEGIN
    IMPORT React and necessary React Native components
    
    DEFINE functional component HelloWorldApp:
        USE useState hook to create message state variable
        
        DEFINE handleButtonPress function:
            SHOW alert dialog with title 'Hello' and message 'Hello World!'
            UPDATE message state to 'Hello World!'
        
        RETURN JSX structure:
            CREATE container View with center alignment
            CREATE Text component for app title
            CREATE TouchableOpacity button component:
                SET onPress handler to handleButtonPress
                INCLUDE Text component inside with 'Click Me!' text
            CONDITIONALLY render message Text if message exists
    
    DEFINE StyleSheet with styles for:
        container: full flex, centered, background color
        title: large, bold font
        button: blue background, padding, rounded corners, shadow
        buttonText: white color, medium font
        message: green color, bold font
    
    EXPORT HelloWorldApp as default component
END