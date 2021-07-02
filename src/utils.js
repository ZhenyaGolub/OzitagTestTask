export const getUserInformation = async ({ tokenType, accessToken }) => {
    const response = await fetch('https://tager.dev.ozitag.com/api/tager/user/profile', {
        headers: {
            'Authorization': `${tokenType} ${accessToken}`
        }
    });

    const user = await response.json();
    return user;
}