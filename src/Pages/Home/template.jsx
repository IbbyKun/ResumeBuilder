import React, { useContext } from 'react';
import { Container, Box } from '@chakra-ui/react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';

const Templates = () => {
    const { setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const showTheme = (e) => {
        setShowComponent(!showComponent);
        setCurrentTheme(e.target.id);
    };

    return (
        <Container maxW={'7xl'} my={{ base: 1.5, md: 16 }}>
            <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
                {
                    ThemeTemplateData.map((item, index) => {
                        return (
                            <div key={index} className="template" onClick={showTheme}>
                                <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                            </div>
                        );
                    })
                }
            </Box>
        </Container>
    );
};

export default Templates;
