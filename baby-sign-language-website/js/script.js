// 视频分类过滤功能
document.addEventListener('DOMContentLoaded', function() {
    // 视频分类
    const categoryButtons = document.querySelectorAll('.category-btn');
    const videoItems = document.querySelectorAll('.video-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 更新活跃按钮
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 过滤视频
            videoItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // 简单的视频点击播放（如果需要模态框播放）
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            // 这里可以添加模态框播放功能
            window.location.href = 'videos.html';
        });
    });
});