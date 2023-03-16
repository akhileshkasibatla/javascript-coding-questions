var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let count = 0;
    let head = null;
    let tail;
    let totalLength = nums1.length + nums2.length;
    
    while(count <= totalLength / 2) {
        tail = head;
        if(nums1[i] < nums2[j]){
            head = nums1[i];
            i++;
        }
        else if(nums1[i] > nums2[j]){
            head = nums2[j];
            j++;
        } else {
            if(nums1[i]) {
                head = nums1[i];
                i++;
            } else {
                head = nums2[j] || 0;
                j++;
            }
        }
        count++;
    }
    if(totalLength % 2 === 0){
        return (head + tail) / 2;
    } else {
        return head;
    }
};