document.getElementById('donation-btn').addEventListener('click', function () {
    showSectionById('compaigns')

    document.getElementById('donation-btn').classList.add('bg-[#B4F461]', 'text-black');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]', 'text-black');
})

document.getElementById('history-btn').addEventListener('click', function () {
    showSectionById('history-section')

    document.getElementById('history-btn').classList.add('bg-[#B4F461]', 'text-black');
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]', 'text-black');
})