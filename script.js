let currentImageUrl = null;
let currentlyDisplayedStages = 15; // 初始显示15个阶段
const stagesPerLoad = 5; // 每次加载5个阶段
const totalStages = timelineData.length;

// 加载更多阶段
function loadMoreStages() {
    const previousScrollLeft = document.getElementById('timelineScroll').scrollLeft;
    const previousTimelineWidth = document.getElementById('timeline').scrollWidth;
    
    currentlyDisplayedStages = Math.min(currentlyDisplayedStages + stagesPerLoad, totalStages);
    generateTimeline();
    
    // 在非竖屏模式下，调整滚动位置以保持视觉连续性
    const isPortraitSmall = window.matchMedia('(orientation: portrait) and (max-width: 900px)').matches;
    if (!isPortraitSmall) {
        requestAnimationFrame(() => {
            const timelineScroll = document.getElementById('timelineScroll');
            const timeline = document.getElementById('timeline');
            const newTimelineWidth = timeline.scrollWidth;
            const widthDiff = newTimelineWidth - previousTimelineWidth;
            timelineScroll.scrollLeft = previousScrollLeft + widthDiff;
        });
    }
    
    // 检查是否需要隐藏"加载更多"按钮
    updateLoadMoreButton();
}

// 更新"加载更多"按钮的显示状态
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (currentlyDisplayedStages >= totalStages) {
        loadMoreBtn.classList.add('hidden');
    } else {
        loadMoreBtn.classList.remove('hidden');
        loadMoreBtn.textContent = `加载更多 (剩余 ${totalStages - currentlyDisplayedStages}) ▶`;
    }
}

// 生成时间轴HTML（改为以 .timeline-item 包裹每个节点）
function generateTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = ''; // 先清空
    
    // 只显示最新的 currentlyDisplayedStages 个阶段
    const startIndex = Math.max(0, totalStages - currentlyDisplayedStages);
    const displayData = timelineData.slice(startIndex);
    
    displayData.forEach((node, index) => {
        const actualIndex = startIndex + index;
        const itemWrapper = document.createElement('div');
        itemWrapper.className = 'timeline-item';

        const topElement = document.createElement('div');
        topElement.className = 'timeline-top';
        
        topElement.innerHTML = `
            <div class="node-number">${actualIndex + 1}</div>
            <div class="node-image" onclick="openModal(${actualIndex}, 0)">
                <img src="${node.mainImage}" alt="阵型 ${actualIndex + 1}">
            </div>
        `;

        if (node.variants && node.variants.length > 0) {
            const variantsHTML = node.variants.map((variant, variantIndex) => `
                <div class="variant-image"
                     onclick="openModal(${actualIndex}, ${variantIndex + 1})"
                     title="变种阵型 ${variantIndex + 1}">
                    <img src="${variant}" alt="变种 ${variantIndex + 1}">
                </div>
            `).join('');
            topElement.innerHTML += `
                <div class="variant-section">
                    <div class="variant-title">变异原型</div>
                    <div class="variant-images"> ${variantsHTML} </div>
                </div>
            `;
        }

        const infoItemsHTML = (node.info || []).map(item => {
            const hasVideos = Array.isArray(item.videos) && item.videos.length > 0;
            const videoContent = hasVideos ? `
                <div class="video-scroll-container">
                    <ul class="video-list">
                        ${item.videos.map(video => {
                            const _info = videoLists[video] || { url: '#', title: video, up: { homePage:'#', picture:'', name:'' } };
                            return `
                            <li>
                                <a href="${_info.url}" target="_blank" rel="noopener noreferrer">
                                    ${_info.title || _info.url}
                                </a>
                                <div class="up-info">
                                    <div class="up-details">
                                        <div class="up-avatar">
                                            <a href="${_info.up.homePage}"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            onclick="event.stopPropagation()">
                                                <img src="${_info.up.picture}" 
                                                    alt="${_info.up.name}" 
                                                    class="up-avatar-img">
                                            </a>
                                        </div>
                                        <a href="${_info.up.homePage}" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            class="up-link"
                                            onclick="event.stopPropagation()">
                                            ${_info.up.name}
                                        </a>
                                    </div>
                                </div>
                            </li>
                        `}).join('')}
                    </ul>
                </div>
            ` : `<div class="video-empty">无</div>`;

            return `
                <div class="info-item" tabindex="0">
                    <span class="date">${item.date}</span>
                    <span class="stage">${item.stage}</span>
                    <div class="video-tooltip" role="tooltip">
                        <div class="video-tooltip-title">相关视频</div>
                        ${videoContent}
                    </div>
                </div>
            `;
        }).join('');

        const bottomElement = document.createElement('div');
        bottomElement.className = 'timeline-bottom';
        bottomElement.innerHTML = `
            <div class="node-info">
                ${infoItemsHTML}
            </div>
        `;

        itemWrapper.appendChild(topElement);
        itemWrapper.appendChild(bottomElement);
        timeline.appendChild(itemWrapper);
    });
}

function setupScrollSync() {
    const timelineWrapper = document.querySelector('.timeline-wrapper');
    const timelineScroll = document.getElementById('timelineScroll');
    const timeline = document.getElementById('timeline');

    if (!timelineWrapper || !timelineScroll || !timeline) {
        return;
    }

    let scrollTrack = timelineScroll.querySelector('.timeline-scroll-track');
    if (!scrollTrack) {
        scrollTrack = document.createElement('div');
        scrollTrack.className = 'timeline-scroll-track';
        timelineScroll.appendChild(scrollTrack);
    }

    const updateTrackWidth = () => {
        // 只有横屏/大屏时才同步横向宽度
        const isPortraitSmall = window.matchMedia('(orientation: portrait) and (max-width: 900px)').matches;
        if (isPortraitSmall) {
            scrollTrack.style.width = `0px`;
        } else {
            scrollTrack.style.width = `${timeline.scrollWidth}px`;
        }
    };

    const updateTimelinePosition = () => {
        const isPortraitSmall = window.matchMedia('(orientation: portrait) and (max-width: 900px)').matches;
        if (isPortraitSmall) {
            timeline.style.transform = `none`;
        } else {
            timeline.style.transform = `translateX(-${timelineScroll.scrollLeft}px)`;
        }
    };

    const updateAll = () => {
        updateTrackWidth();
        updateTimelinePosition();
    };

    updateAll();
    window.updateTimelineTrackWidth = updateAll;

    timelineScroll.addEventListener('scroll', () => {
        updateTimelinePosition();
    }, { passive: true });

    window.addEventListener('resize', updateAll);

    const observer = new MutationObserver(() => {
        requestAnimationFrame(updateAll);
    });

    observer.observe(timeline, { childList: true, subtree: true });

    // 触控拖拽，仅在横向模式启用
    let isPointerDown = false;
    let startPointerX = 0;
    let dragStarted = false;
    let pointerType = '';
    let initialScrollLeft = 0;

    const handlePointerDown = (event) => {
        const isPortraitSmall = window.matchMedia('(orientation: portrait) and (max-width: 900px)').matches;
        if (isPortraitSmall) return; // 竖屏不启用横向拖动

        if (event.pointerType === 'mouse' && event.button !== 0) {
            return;
        }
        isPointerDown = true;
        startPointerX = event.clientX;
        dragStarted = false;
        pointerType = event.pointerType;
        initialScrollLeft = timelineScroll ? timelineScroll.scrollLeft : 0;
        if (pointerType !== 'mouse' && timelineWrapper.setPointerCapture) {
            timelineWrapper.setPointerCapture(event.pointerId);
        }
    };

    const handlePointerMove = (event) => {
        const isPortraitSmall = window.matchMedia('(orientation: portrait) and (max-width: 900px)').matches;
        if (isPortraitSmall) return;
        if (!isPointerDown) {
            return;
        }
        const moveX = event.clientX - startPointerX;
        if (!dragStarted && Math.abs(moveX) > 5) {
            dragStarted = true;
        }
        if (dragStarted && timelineScroll) {
            timelineScroll.scrollLeft = initialScrollLeft - moveX;
        }
        if (dragStarted && (pointerType === 'touch' || pointerType === 'pen')) {
            event.preventDefault();
        }
    };

    const handlePointerUp = (event) => {
        if (!isPointerDown) {
            return;
        }
        isPointerDown = false;
        dragStarted = false;
        if (pointerType !== 'mouse' && timelineWrapper.hasPointerCapture && timelineWrapper.hasPointerCapture(event.pointerId)) {
            timelineWrapper.releasePointerCapture(event.pointerId);
        }
    };

    timelineWrapper.addEventListener('pointerdown', handlePointerDown);
    timelineWrapper.addEventListener('pointermove', handlePointerMove);
    timelineWrapper.addEventListener('pointerup', handlePointerUp);
    timelineWrapper.addEventListener('pointercancel', handlePointerUp);
    timelineWrapper.addEventListener('pointerleave', handlePointerUp);
}

// 打开图片模态框
function openModal(nodeIndex, imageType) {
    const node = timelineData[nodeIndex];
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    // 设置模态框图片
    if (imageType == 0) {
        modalImage.src = node.mainImage;
    }
    else {
        modalImage.src = node.variants[imageType - 1]
    }

    // 显示模态框
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 禁止背景滚动
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复背景滚动
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    generateTimeline();
    updateLoadMoreButton();
    setupScrollSync();
    
    // 关闭模态框
    document.querySelector('.close').addEventListener('click', closeModal);
    // 点击背景关闭模态框
    document.getElementById('imageModal').addEventListener('click', function(event) {
        if (event.target === this) {
            closeModal();
        }
    });

    // 在窗口旋转或尺寸变化时重新渲染或调整（保持同步）
    window.addEventListener('orientationchange', () => {
        // 小优化：重新计算轨道和布局
        if (window.updateTimelineTrackWidth) {
            setTimeout(window.updateTimelineTrackWidth, 120);
        }
    });
});
