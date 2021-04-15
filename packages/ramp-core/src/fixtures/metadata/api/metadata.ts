import { FixtureInstance } from '@/api';
import { MetadataPayload } from '../definitions';

export class MetadataAPI extends FixtureInstance {
    /**
     * Opens the metadata panel. Provides the given payload as a prop to the panel.
     * @param payload
     */
    openMetadata(payload: MetadataPayload): void {
        this.$iApi.panelAPI.open({ id: 'metadata-panel', props: { payload: payload } });
    }
}
