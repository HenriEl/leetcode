var isValid = function(s) {
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    const stringArr = s.split('');
    
    const stack = [stringArr[0]];
    
    
    for (let i = 1; i < stringArr.length; i++) {
        if (bracketMap[stack[stack.length - 1]] === stringArr[i]) {
            stack.pop();
        } else {
            stack.push(stringArr[i]);
        }
    }
    
    if (!stack.length) {
        return true;
    } else {
        return false;
    }
};
