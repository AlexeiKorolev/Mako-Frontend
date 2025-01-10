export const testPatent = async (patentText) => {
    console.log('Calling analyze endpoint...');

    try {
        const response = await fetch('https://mako-backend-47860532355.us-central1.run.app/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: patentText
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
            alert(JSON.stringify(data, null, 2));
        } else {
            console.error('Error calling analyze endpoint');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error: ' + error.message);
    }
};
