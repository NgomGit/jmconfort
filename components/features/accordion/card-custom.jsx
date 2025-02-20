import SlideToggle from 'react-slide-toggle';

import React from 'react';

function Card ( props ) {
    const { title, expanded, adClass } = props;

    function preventUrl ( e ) {
        e.preventDefault();
    }

    return (
        <SlideToggle collapsed={ expanded ? false : true } >
            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                <div className={ `${ adClass }` }>
                    <div className="history-header" onClick={ onToggle } >
                        <h5>
                            <a href="#" className={ `toggle-button ${ toggleState }` } onClick={ preventUrl }>{ title }</a>
                        </h5>
                    </div>

                    <div ref={ setCollapsibleElement } className="overflow-hidden">
                        <div className="history-body">
                            { props.children }
                        </div>
                    </div>
                </div>
            ) }
        </SlideToggle >
    )
}

export default React.memo( Card );