import React from 'react';

const Stories = () => {
    return <div>{'Instagram Stories'}</div>;
};

module.exports = targets => {
    targets.of('@magento/venia-ui').productThumbnail.tap(Stories);
};
