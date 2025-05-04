import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 16,
        paddingBottom: 40,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    headerTitle: {
        padding: 16,
        paddingBottom: 8,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
    },
    listContent: {
        padding: 16,
        paddingTop: 8,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
    },
    lastReadingCard: {
        marginBottom: 24,
    },
    dateRow: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    dateLabel: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginRight: 8,
    },
    dateValue: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    meterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    meterBox: {
        width: '48%',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
    },
    meterTitle: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginTop: 8,
        marginBottom: 8,
    },
    meterValue: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
    },
    meterCost: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        marginTop: 4,
    },
    viewDetailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        paddingVertical: 8,
    },
    viewDetailsText: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginRight: 4,
    },
    noReadingCard: {
        marginBottom: 24,
        alignItems: 'center',
        paddingVertical: 32,
    },
    noReadingText: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 8,
    },
    noReadingSubtext: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
        marginBottom: 24,
    },
    addFirstButton: {
        minWidth: 200,
    },
    quickLinksContainer: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 16,
    },
    quickLinksGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    quickLinkCard: {
        width: '48%',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 1,
    },
    quickLinkText: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginTop: 8,
    },
    tipCard: {
        backgroundColor: '#FFF9C4',
        marginBottom: 24,
    },
    tipHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    tipTitle: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: 8,
    },
    tipText: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        lineHeight: 22,
    },
    iconOnly: {
        padding: 8,  // Add some padding for a larger touch target
    },
});