var registrations = [];
function checkTown(location) {
    if (location.startsWith('CY')) {
        return 'Bellville';
    }
    else if (location.startsWith('CA')) {
        return 'Cape Town';
    }
    else if (location.startsWith('CJ')) {
        return 'Paarl';
    }
}
