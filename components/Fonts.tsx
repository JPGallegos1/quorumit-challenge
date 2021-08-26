import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
        @font-face {
        font-family: 'SF Pro Display Regular';
        font-style: normal;
        font-weight: normal;
        src: local('SF Pro Display Regular'), url('/fonts/SFPRODISPLAYREGULAR.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'SF Pro Display Ultralight Italic';
        font-style: normal;
        font-weight: normal;
        src: local('SF Pro Display Ultralight Italic'), url('/fonts/SFPRODISPLAYULTRALIGHTITALIC.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'SF Pro Display Thin Italic';
        font-style: normal;
        font-weight: normal;
        src: local('SF Pro Display Thin Italic'), url('/fonts/SFPRODISPLAYTHINITALIC.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'SF Pro Display Light Italic';
        font-style: normal;
        font-weight: normal;
        src: local('SF Pro Display Light Italic'), url('/fonts/SFPRODISPLAYLIGHTITALIC.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'SF Pro Display Medium';
        font-style: normal;
        font-weight: normal;
        src: local('SF Pro Display Medium'), url('/fonts/SFPRODISPLAYMEDIUM.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'SF Pro Display Semibold Italic';
        font-style: normal;
        font-weight: normal;
        src: local('SF Pro Display Semibold Italic'), url('/fonts/SFPRODISPLAYSEMIBOLDITALIC.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'SF Pro Display Bold';
        font-style: normal;
        font-weight: normal;
        src: local('SF Pro Display Bold'), url('/fonts/SFPRODISPLAYBOLD.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'SF Pro Display Heavy Italic';
        font-style: normal;
        font-weight: normal;
        src: local('SF Pro Display Heavy Italic'), url('/fonts/SFPRODISPLAYHEAVYITALIC.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'SF Pro Display Black Italic';
        font-style: normal;
        font-weight: normal;
        src: local('SF Pro Display Black Italic'), url('/fonts/SFPRODISPLAYBLACKITALIC.woff') format('woff');
        }
      `}
  />
);
export default Fonts;
