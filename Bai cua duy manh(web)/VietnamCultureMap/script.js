
const regionData = {
    "tay-bac": {
        id: "tay-bac",
        name: "Tây Bắc Bộ",
        description: "Vùng núi non hùng vĩ với địa hình hiểm trở, nơi sinh sống của nhiều đồng bào dân tộc thiểu số với bản sắc văn hóa vô cùng độc đáo. Nổi tiếng với những thửa ruộng bậc thang mùa lúa chín và điệu múa xòe hoa.",
        specialties: ["Thổ cẩm", "Lợn cắp nách", "Cơm lam", "Khèn Mông", "Thắng cố"],
        image_url: "https://images.unsplash.com/photo-1559592413-7ce4f0a048ac?q=80&w=1000&auto=format&fit=crop"
    },
    "dong-bac": {
        id: "dong-bac",
        name: "Đông Bắc Bộ",
        description: "Nổi tiếng với kỳ quan thiên nhiên thế giới Vịnh Hạ Long, công viên địa chất toàn cầu Cao nguyên đá Đồng Văn. Văn hóa nổi bật với hát Then, đàn Tính của người Tày, Nùng.",
        specialties: ["Chả mực Hạ Long", "Bánh cuốn trứng", "Vịt quay Thất Khê", "Rượu ngô"],
        image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop"
    },
    "db-song-hong": {
        id: "db-song-hong",
        name: "Đồng Bằng Sông Hồng",
        description: "Cái nôi của nền văn minh lúa nước, lưu giữ những giá trị văn hóa truyền thống lâu đời của người Việt với những làng nghề truyền thống, hội làng mùa xuân và các làn điệu dân ca, chèo, tuồng.",
        specialties: ["Phở Hà Nội", "Bún chả", "Cốm làng Vòng", "Trà sen", "Rối nước"],
        image_url: "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=1000&auto=format&fit=crop"
    },
    "tay-nguyen": {
        id: "tay-nguyen",
        name: "Tây Nguyên",
        description: "Vùng đất đỏ bazan bạt ngàn với những đồi cà phê. Nơi đây sở hữu Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO công nhận là kiệt tác truyền khẩu và phi vật thể nhân loại.",
        specialties: ["Cà phê", "Rượu cần", "Gà nướng bản Đôn", "Thịt rừng gác bếp"],
        image_url: "https://images.unsplash.com/photo-1625404169206-8d1e389d4dc5?q=80&w=1000&auto=format&fit=crop"
    },
    "db-scl": {
        id: "db-scl",
        name: "Đồng Bằng Sông Cửu Long",
        description: "Vùng miền Tây sông nước trù phú với mạng lưới kênh rạch chằng chịt, chợ nổi sầm uất và những vườn cây ăn trái trĩu quả. Con người nơi đây nổi tiếng hào sảng, hiền hòa với nghệ thuật Đờn ca tài tử.",
        specialties: ["Lẩu mắm", "Bánh xèo", "Hủ tiếu Nam Vang", "Trái cây miệt vườn", "Chợ nổi"],
        image_url: "https://images.unsplash.com/photo-1583417657208-de0c96eb8e62?q=80&w=1000&auto=format&fit=crop"
    }
};


const hotspots = document.querySelectorAll('.hotspot');
const infoPanel = document.getElementById('infoPanel');
const closeBtn = document.getElementById('closeBtn');

// Các elements bên trong Panel cần cập nhật dữ liệu
const elImage = document.getElementById('regionImage');
const elName = document.getElementById('regionName');
const elDesc = document.getElementById('regionDesc');
const elSpecialties = document.getElementById('regionSpecialties');


function showRegionInfo(regionId) {
    const data = regionData[regionId];


    if (!data) {
        console.warn(`Chưa có dữ liệu cho vùng: ${regionId}`);
        return;
    }


    hotspots.forEach(hotspot => hotspot.classList.remove('active'));
    
    // Đánh dấu (highlight) vùng đang được click
    const activeRegion = document.getElementById(regionId);
    if(activeRegion) activeRegion.classList.add('active');


    elName.textContent = data.name;
    elDesc.textContent = data.description;
    elImage.src = data.image_url;
    elImage.alt = `Phong cảnh đặc trưng của ${data.name}`;


    elSpecialties.innerHTML = '';
    

    data.specialties.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        elSpecialties.appendChild(li);
    });


    infoPanel.classList.add('open');
}


hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', function() {

        showRegionInfo(this.id);
    });
});

closeBtn.addEventListener('click', () => {
    infoPanel.classList.remove('open');

    hotspots.forEach(hotspot => hotspot.classList.remove('active'));
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && infoPanel.classList.contains('open')) {
        closeBtn.click();
    }
});


document.addEventListener('click', (e) => {
    if (!infoPanel.contains(e.target) && !e.target.closest('.map-wrapper')) {
        infoPanel.classList.remove('open');
        hotspots.forEach(hotspot => hotspot.classList.remove('active'));
    }
});
