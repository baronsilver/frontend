import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface Patient {
    name: string;
    nhsNumber: string;
}

interface PatientTableProps {
    patients: Patient[];
}

export const PatientTable: React.FC<PatientTableProps> = ({ patients }) => {
    return (
        <ScrollView horizontal>
            <View>
                <View style={styles.headerRow}>
                    <Text style={[styles.headerCell, styles.nameCell]}>Name</Text>
                    <Text style={[styles.headerCell, styles.nhsCell]}>NHS Number</Text>
                </View>
                {patients.map((patient, index) => (
                    <View key={index} style={styles.row}>
                        <Text style={[styles.cell, styles.nameCell]}>{patient.name}</Text>
                        <Text style={[styles.cell, styles.nhsCell]}>{patient.nhsNumber}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f5f5f5',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    headerCell: {
        fontWeight: 'bold',
        padding: 10,
    },
    cell: {
        padding: 10,
    },
    nameCell: {
        width: 200,
    },
    nhsCell: {
        width: 120,
    },
});