export type WiridItem = {
	id: number;
	times: number;
	arabic: string;
	tnc: string;
};

const source =
	'https://islam.nu.or.id/post/read/79315/susunan-bacaan-wirid-sesudah-shalat-lima-waktu';

const wiridData: WiridItem[] = [
	{
		id: 1,
		times: 3,
		arabic:
			'أَسْتَغْفِرُ اللهَ الْعَظِـيْمِ الَّذِيْ لَااِلَهَ اِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ وَأَتُوْبُ إِلَيْهِ ',
		tnc: ''
	},
	{
		id: 2,
		times: 1,
		arabic:
			'اَللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَاالْـجَلَالِ وَاْلإِكْرَام',
		tnc: ''
	},
	{
		id: 3,
		times: 1,
		arabic:
			'اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَاالْجَدِّ مِنْكَ الْجَدُّ',
		tnc: ''
	},
	{
		id: 4,
		times: 1,
		arabic: 'اَللَّـهُمَّ اَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
		tnc: ''
	},
	{
		id: 5,
		times: 3,
		arabic:
			'لَاإِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِيْ وَيُمِيْتُ وَهُوَ عَلَى كُلِّ شَيْئٍ قَدِيْرٌ',
		tnc: '(dibaca tiga kali tiap selesai shalat fardhu, khusus setelah maghrib dan shubuh sepuluh kali)'
	},
	{
		id: 6,
		times: 7,
		arabic: 'اَللَّهُمَّ أَجِرْنِـى مِنَ النَّارِ',
		tnc: '(tujuh kali bakda maghrib dan shubuh)'
	},
	{
		id: 7,
		times: 1,
		arabic:
			'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ. بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. اَللهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَّلَانَوْمٌ، لَهُ مَافِي السَّمَاوَاتِ وَمَافِي اْلأَرْضِ مَن ذَا الَّذِيْ يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَابَيْنَ أَيْدِيْهِمْ وَمَاخَلْفَهُمْ وَلَا يُحِيْطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَآءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَاْلأَرْضَ وَلَا يَـؤدُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيْمُ',
		tnc: ''
	},
	{
		id: 8,
		times: 1,
		arabic:
			'آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ، كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ، وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا، لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ. رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا، رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا، رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ، وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا، أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
		tnc: ''
	},
	{
		id: 9,
		times: 1,
		arabic:
			'شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ، لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ، إِنَّ الدِّينَ عِنْدَ اللَّهِ الْإِسْلَامُ، قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ، بِيَدِكَ الْخَيْرُ،  إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. تُولِجُ اللَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي اللَّيْلِ، وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ، وَتَرْزُقُ مَنْ تَشَاءُ بِغَيْرِ حِسَابٍ',
		tnc: ''
	},
	{
		id: 10,
		times: 1,
		arabic: 'Membaca Surat al-Ikhlas, Surat al-Falaq, Surat an-Nas, lalu Surat al-Fatihah',
		tnc: ''
	},
	{
		id: 11,
		times: 33,
		arabic: 'سُبْحَانَ اللهِ ×٣٣ ',
		tnc: ''
	},
	{
		id: 12,
		times: 33,
		arabic: 'اَلْحَمْدُلِلهِ ×٣٣',
		tnc: ''
	},
	{
		id: 13,
		times: 33,
		arabic: 'اَللهُ اَكْبَرْ ×٣٣',
		tnc: ''
	},
	{
		id: 14,
		times: 1,
		arabic:
			'اَللهُ اَكْبَرْ كَبِيْرًا وَالْحَمْدُ لِلهِ كَثِيْرًا وَسُبْحَانَ اللهِ بُكْرَةً وَأَصِيْلًا، لَاإِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُيُحْيِيْ وَيُمِيْتُ وَهُوَ عَلَى كُلِّ شَيْئٍ قَدِيْرٌ، وَلَاحَوْلَ وَلَاقُوَّةَ إِلَّابِا للهِ الْعَلِـىِّ الْعَظِيْمِ. ',
		tnc: ''
	},
	{
		id: 15,
		times: 1,
		arabic: 'أَفْضَلُ ذِكْرِ فَاعْلَمْ أَنَّهُ',
		tnc: ''
	},
	{
		id: 16,
		times: 100,
		arabic: ' لَاإِلَهَ إِلَّا اللهُ ',
		tnc: '(Dibaca 300 kali bakda shubuh, 100 kali bakda isya, 50 kali bakda dhuhur, 50 kali bakda ashar, dan 100 kali bakda maghrib)'
	},
	{
		id: 17,
		times: 100,
		arabic: 'صَلَّى اللهُ عَلَى مُحَمَّدٍ',
		tnc: '(dibaca bakda shubuh 300 atau 100 kali)'
	},
	{
		id: 18,
		times: 1,
		arabic: 'لَاإِلَهَ إِلَّا اللهُ مُحَمَّدٌ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ',
		tnc: ''
	}
];

export default {
	source,
	data: wiridData
};
