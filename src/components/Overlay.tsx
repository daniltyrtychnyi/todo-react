import '../styles/components/overlay.css'
import Field from './Field'

export default () => {
    return (
        <dialog className="overlay" aria-labelledby="new-task-title" data-js-overlay="">
            <h2 className="overlay__title" id="new-task-title">New Note</h2>
            <form className="overlay__new-task-form" data-js-overlay-new-task-form="">
                <Field
                    id="new-task"
                    label="Input your note..."
                    extraAttrs={{
                        'data-js-overlay-new-task-input': '',
                    }}
                />
                <div className="overlay__actions">
                    <button className="overlay__cancel-button button button--transparent" type="button"
                            data-js-overlay-new-task-cancel-button="">
                        Cancel
                    </button>
                    <button className="overlay__apply-button button" type="submit">Apply</button>
                </div>
            </form>
        </dialog>
    )
}