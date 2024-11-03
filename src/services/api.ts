export interface ApiResponse {
    name: string;
    nhsNumber: string;
}

export const processData = async (firstFormat: string, secondFormat: string): Promise<ApiResponse[]> => {
    try {
        const response = await fetch('http://localhost:5189/api/DataProcessor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstFormat,
                secondFormat
            }),
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error processing data:', error);
        throw error;
    }
};
