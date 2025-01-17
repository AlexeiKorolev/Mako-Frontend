import React, { useGlobal } from 'react';
import { questionsSectionOrder } from '../constants/constants';

export const testPatent = async (patentText, setQuestions) => {
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

            // Update the questions state with the API response
            const updatedQuestions = {};
            questionsSectionOrder.forEach(section => {
                updatedQuestions[section] = data[section] || [];
            });

            // Set the questions using the passed setter function
            setQuestions(updatedQuestions);

            // Define the section order
            const sectionOrder = ['background', 'summary_of_invention', 'detailed_description', 'claims_help'];

            // Iterate through sections in specified order
            sectionOrder.forEach(section => {
                console.log(`\n=== ${section.toUpperCase()} ===`);

                // Check if section exists in response
                if (data[section]) {
                    data[section].forEach((item, index) => {
                        console.log(`\nQuestion ${index + 1}: ${item.question}`);
                        console.log(`Answer: ${item.answer}`);
                    });
                }
            });
        } else {
            console.error('Error calling analyze endpoint');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error: ' + error.message);
    }
};