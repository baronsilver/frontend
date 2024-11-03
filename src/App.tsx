import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { PatientTable } from './components/PatientTable';
import { processData, ApiResponse } from './services/api';

const App: React.FC = () => {
    const [firstFormat, setFirstFormat] = useState('');
    const [secondFormat, setSecondFormat] = useState('');
    const [patients, setPatients] = useState<ApiResponse[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleProcess = async () => {
        try {
            setError(null);
            const result = await processData(firstFormat, secondFormat);
            setPatients(result);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
            console.error('Error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                multiline
                placeholder="Enter first format data..."
                value={firstFormat}
                onChangeText={setFirstFormat}
            />
            <TextInput
                style={styles.input}
                multiline
                placeholder="Enter second format data..."
                value={secondFormat}
                onChangeText={setSecondFormat}
            />
            <Button title="Process Data" onPress={handleProcess} />
            {error }
            <PatientTable patients={patients} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 40,
    },
    input: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    error: {
        color: 'red',
        marginVertical: 10,
    }
});

export default App;