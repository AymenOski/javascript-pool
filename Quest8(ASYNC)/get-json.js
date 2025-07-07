const getJSON = async (path, RawParams = '') => {
    let params = new URLSearchParams(RawParams)
    const fullURL = `${path}?${params.toString()}`;
    try {
        const response = await fetch(fullURL)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const json = await response.json();
        if (json.error) throw new Error(json.error)
        return json.data;
    } catch (error) {
        throw error
    }

}