import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Rocket, CheckCircle2, Users, BookOpen, Target, Search, Megaphone, Palette, ShoppingCart, DollarSign, ArrowRight, ListChecks } from 'lucide-react';
import { FadeIn, Section, Bridge, FlowCard, FlowArrow, FlowArrowRight, ExampleCard } from './Components';
import { YoutubeIcon, InstagramIcon, ThreadsIcon, TiktokIcon } from './PlatformLogos';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const tocItems = [
    { num: '01', title: '무자본 제로 비즈니스 방법', icon: <Target /> },
    { num: '02', title: '나만의 무기 발굴', icon: <Search /> },
    { num: '03', title: '수요 검증', icon: <CheckCircle2 /> },
    { num: '04', title: '미끼 상품 만들기', icon: <Palette /> },
    { num: '05', title: 'DB수집을 마케팅', icon: <Megaphone /> },
    { num: '06', title: '본 상품 만들기', icon: <BookOpen /> },
    { num: '07', title: '판매 시작', icon: <ShoppingCart /> },
    { num: '08', title: '고단가 판매 전략', icon: <DollarSign /> },
    { num: '09', title: '확장 전략', icon: <Users /> },
    { num: '10', title: '실행 가이드 (요약 정리)', icon: <ListChecks /> }
  ];

  return (
    <div className="app-container">
      <div className="bg-glow" style={{ backgroundPositionY: backgroundY }} />
      
      {/* Hero Section */}
      <section className="section hero">
        <div className="content-wrapper">
          <FadeIn>
            <h2 className="hero-subtitle" style={{color: 'var(--text-muted)'}}>Second Secret</h2>
            <h1 className="hero-title" style={{fontSize: 'clamp(2.5rem, 6vw, 4.5rem)'}}>무자본 제로 비즈니스<br/>실전 비법서</h1>
            <p className="chapter-content" style={{textAlign: 'center'}}>
              결과물을 판매하는 진짜 지식창업의 모든 것
            </p>
          </FadeIn>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to Read</span>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Table of Contents Section */}
      <Section>
        <FadeIn>
          <h2 className="chapter-title" style={{fontSize: '2rem'}}>목차 (INDEX)</h2>
          <p className="chapter-content">본 비법서에서 다룰 제로 비즈니스의 10가지 핵심 단계입니다.</p>
          <div className="toc-list">
            {tocItems.map((item, idx) => (
              <div key={idx} className="toc-item" style={{display:'flex', width:'100%'}}>
                <span className="toc-num">{item.num}</span>
                <span style={{color: 'var(--accent)', opacity: 0.8}}>{item.icon}</span>
                <span className="toc-text">{item.title}</span>
              </div>
            ))}
          </div>
          <Bridge text="먼저 이 노하우를 전달해 드리는 저에 대해 짧게 소개하겠습니다." />
        </FadeIn>
      </Section>

      {/* Intro Section */}
      <Section>
        <FadeIn>
          <div className="intro-card">
            <h3 className="chapter-title" style={{fontSize: '2rem'}}>김테크 소개</h3>
            <p className="intro-text" style={{marginBottom: '2rem'}}>
              안녕하세요 김테크 입니다. 본 내용에 들어가기 앞서 제가 누구인지, 어떤 과정을 거쳐 이 비즈니스를 완성했는지 간략히 소개하겠습니다. 어떤 사람이 썼는지 알고 보셔야 더 신뢰가 가실 테니까요.
            </p>
            
            <div className="history-list">
              <div className="history-item">
                <div className="history-title">2015년 - 마케팅 입문과 블로그 점령</div>
                <p className="chapter-content" style={{fontSize: '1rem'}}>
                  S사를 퇴사하고 부동산 시장에 뛰어들며 마케팅의 절실함을 느꼈습니다. 그 어렵다던 부동산 키워드 블로그 상위 노출을 점령하며 자신감을 얻었습니다.
                </p>
              </div>
              <div className="history-item">
                <div className="history-title">2017년 - 모든 마케팅 채널과 수익화 마스터</div>
                <p className="chapter-content" style={{fontSize: '1rem'}}>
                  제휴마케팅(CPA, CPS 등)을 본격 시작하며, 블로그의 한계를 넘어 페이스북, 인스타그램, 커뮤니티 등 온갖 플랫폼과 어뷰징, 나아가 구글/메타/네이버 광고까지 전부 습득했습니다. 월 2천만 원 이상의 수익을 냈고 잘나가는 대행사 및 교육 대표로 활동했습니다.
                </p>
              </div>
              <div className="history-item">
                <div className="history-title">시련의 시기 - 무너짐과 4년의 공백</div>
                <p className="chapter-content" style={{fontSize: '1rem'}}>
                  코로나, 전세사기, 코인사기, 다단계까지 숱한 풍파를 겪으며 한순간에 모든 것이 무너졌습니다. 그 후 4년을 쉬며 절치부심했습니다.
                </p>
              </div>
              <div className="history-item">
                <div className="history-title">현재 - AI와 자동화, 제로 비즈니스의 완성</div>
                <p className="chapter-content" style={{fontSize: '1rem', marginBottom: 0}}>
                  최근 1년간 미친듯이 AI와 마케팅 자동화에 수천만 원을 투자했습니다. 지식을 판매할 수 있도록 돕는 지식창업 강의, <strong>'제로 비즈니스'</strong>를 다시 시작하게 되었습니다.
                </p>
              </div>
            </div>

            <div className="quote-block" style={{marginTop: '3rem'}}>
              "AI로 30분 만에 찍어낸 전자책들이 시장을 망치고 있습니다. 환불과 컴플레인이 속출합니다. 고객은 바보가 아닙니다."
            </div>
            <p className="intro-text">
              저는 2018년부터 항상 코칭 과정을 오픈하며 수강생과 끝까지 동행했습니다. 이제 시장에서 단순 지식의 가치는 '0'에 수렴합니다. 고객이 원하는 <strong>진짜 결과물</strong>을 내주는 <strong>'페이스 메이커'</strong>가 되어야 합니다. 그 핵심 노하우를 지금 시작합니다.
            </p>
          </div>
          <Bridge text="그렇다면 기존의 지식 창업과 제로 비즈니스는 무엇이 다를까요?" />
        </FadeIn>
      </Section>

      {/* Chapter 1 */}
      <Section>
        <FadeIn>
          <span className="chapter-number">01</span>
          <h2 className="chapter-title">무자본 제로 비즈니스 방법</h2>
          <p className="chapter-content">
            일반적인 지식창업은 다음과 같이 진행 됩니다.
          </p>
          
          <div style={{display:'flex', flexDirection:'column', gap:'2rem', width:'100%'}}>
            {/* 일반 방식 (크게 1개) */}
            <div className="method-card" style={{opacity: 0.9, width: '100%'}}>
              <h3 className="method-title" style={{color: '#ef4444'}}>✕ 일반적인 지식창업 패턴</h3>
              
              <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem', marginTop:'1.5rem', justifyContent:'center', alignItems:'center'}}>
                <FlowCard>주제선정</FlowCard><FlowArrowRight/>
                <FlowCard>Chat GPT로 대충 상품 만들기</FlowCard><FlowArrowRight/>
                <FlowCard>상품 가격 저가로 설정 (1~3만원)</FlowCard><FlowArrowRight/>
                <FlowCard>광고 진행 (상품 가격과 동일)</FlowCard><FlowArrowRight/>
                <FlowCard>2개 이상 팔리면 순수익</FlowCard><FlowArrowRight/>
                <FlowCard>광고비 올리기</FlowCard><FlowArrowRight/>
                <FlowCard>수익을 후킹으로 권위 입증하기</FlowCard><FlowArrowRight/>
                <FlowCard style={{background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.3)'}}>상품 단가 올리기</FlowCard>
              </div>

              <p className="chapter-content" style={{fontSize:'1rem', marginTop:'1.5rem', marginBottom: 0}}>
                즉 이 게임은 잘팔리는 주제를 찾는 게임입니다. 요즘은 너도나도 다 같은 방법을 사용해서 시장에 대한 불신이 가득합니다. 제가 알려드리는 전략은 다릅니다.
              </p>
            </div>

            {/* 제로 비즈니스 2가지 전략 (2줄) */}
            <div className="method-grid">
              <div className="method-card" style={{borderColor: 'var(--accent)'}}>
                <h3 className="method-title" style={{color: 'var(--accent)'}}>🔥 전략 1. 저가형 상품/전자책 판매 전략</h3>
                <p className="chapter-content" style={{fontSize:'0.9rem'}}>단건 판매를 목적으로 할 때</p>
                <div style={{display:'flex', flexDirection:'column', gap:'0.25rem', alignItems:'stretch'}}>
                  <FlowCard highlight>나만의 무기 선정</FlowCard>
                  <FlowArrow/>
                  <FlowCard highlight>수요 검증 (상품부터 만들지 않음)</FlowCard>
                  <FlowArrow/>
                  <FlowCard highlight>수요가 확인되면 상품 제작</FlowCard>
                  <FlowArrow/>
                  <FlowCard highlight>SNS 홍보 진행 (광고 안함)</FlowCard>
                  <FlowArrow/>
                  <FlowCard highlight>판매 진행</FlowCard>
                </div>
              </div>

              <div className="method-card" style={{borderColor: 'var(--accent)'}}>
                <h3 className="method-title" style={{color: 'var(--accent)'}}>🔥 전략 2. 고부가가치 상품 판매 퍼널</h3>
                <p className="chapter-content" style={{fontSize:'0.9rem'}}>1:1 코칭, 컨설팅 등 고단가 모델일 때</p>
                <div style={{display:'flex', flexDirection:'column', gap:'0.25rem', alignItems:'stretch'}}>
                  <FlowCard highlight>나만의 무기 선정</FlowCard>
                  <FlowArrow/>
                  <FlowCard highlight>수요 검증</FlowCard>
                  <FlowArrow/>
                  <FlowCard highlight>수요가 확인되면 DB수집용 미끼 상품 및 랜딩페이지 제작</FlowCard>
                  <FlowArrow/>
                  <FlowCard highlight>SNS 홍보 및 수집된 DB 고민 무료 해결</FlowCard>
                  <FlowArrow/>
                  <FlowCard highlight>무료 특강 진행 및 오버딜리버리</FlowCard>
                  <FlowArrow/>
                  <FlowCard highlight>페이스 메이커로 고단가 상품 판매</FlowCard>
                </div>
              </div>
            </div>
          </div>
          
          <Bridge text="시작의 첫 단추, 나만의 무기는 어떻게 찾을까요?" />
        </FadeIn>
      </Section>

      {/* Chapter 2 */}
      <Section>
        <FadeIn>
          <span className="chapter-number">02</span>
          <h2 className="chapter-title">나만의 무기 발굴</h2>
          <p className="chapter-content">내 무기는 어떻게 찾을까요? 너무 어렵게 생각하지 말고 나 자신에 대한 이력서를 작성한다고 생각하고 5가지를 쭉 적어보시길 바랍니다.</p>
          <div style={{marginBottom: '2rem'}}>
            <ExampleCard label="1. 3년전 나는 못했지만 지금은 할 수 있는것" reaction="👉 SNS 셋팅 못함 → 현재 4개 운영 → SNS 셋팅 밀착 동행반" />
            <ExampleCard label="2. 다른 사람들은 못하는데 나는 할 수 있는 것" reaction="👉 남들은 책 요약을 어려워함 → 요약 정리 챌린지 운영" />
            <ExampleCard label="3. 내가 평소 관심을 가지고 있거나 소비를 한 것" reaction="👉 유튜브 트렌드/이슈 매일 챙겨봄 → 떡상 트렌드 분석 및 기획 동행" />
            <ExampleCard label="4. 나의 특기나 성격" reaction="👉 성격이 꼼꼼해서 식당/물건 리뷰를 기가 막히게 씀 → 블로그 체험단 무조건 선정되는 리뷰 작성법 코칭" />
            <ExampleCard label="5. 어떠한 결과물을 보여줄만한 나의 성과" reaction="👉 당근마켓에서 안 쓰는 물건으로 월 50만 원 벌어봄 → 당근마켓 소싱부터 판매까지 수익화 챌린지" />
          </div>
          <p className="chapter-content">내가 옆에 붙어서 저 사람이 어려워 하는 걸 도와준다고 생각하시면 됩니다.</p>
          <Bridge text="무기를 찾았다면, 상품을 만들기 전에 당장 해야 할 일이 있습니다." />
        </FadeIn>
      </Section>

      {/* Chapter 3 */}
      <Section>
        <FadeIn>
          <span className="chapter-number">03</span>
          <h2 className="chapter-title">수요 검증</h2>
          <p className="chapter-content">이렇게 찾은 나만의 무기를 어떻게 검증할까요? 고민하지 마시고 <strong>바로 sns에 적어보는 겁니다. 기획만 하고 바로 홍보부터 하세요.</strong></p>
          
          <div className="method-card" style={{marginTop: '2rem'}}>
            <h3 className="method-title">🔥 5가지 무기 기반 수요 검증 질문 예시</h3>
            
            <ExampleCard icon="💡" label="예를 들어 1 (과거 극복)" reaction={`Q: "혹시 sns 홍보 해야 하는데 아직 시작도 못한 사람 있어?"\nA: 반응이 오면 바로 [SNS 시작하기 특강] 기획 돌입!`} />
            
            <ExampleCard icon="💡" label="예를 들어 2 (나만의 기술)" reaction={`Q: "회사에서 엑셀 함수 매번 헷갈려서 야근하는 사람?"\nA: 직장인들 반응 터지면 [퇴근 시간 줄이는 엑셀 함수] 전자책 작성!`} />
            
            <ExampleCard icon="💡" label="예를 들어 3 (관심사)" reaction={`Q: "요즘 바이브 코딩 유행인데 아직 손도 못 댄 사람?"\nA: 해보고 싶다는 댓글 달리면 [바이브 코딩 따라하기] 강의 촬영!`} />
            
            <ExampleCard icon="💡" label="예를 들어 4 (특기/성격)" reaction={`Q: "블로그 체험단 신청하는 족족 다 떨어지시는 분 계신가요?"\nA: "저요 ㅠㅠ" 하면 바로 [체험단 100% 붙는 리뷰 작성법] 소책자 배포!`} />
            
            <ExampleCard icon="💡" label="예를 들어 5 (작은 성과)" reaction={`Q: "집에 있는 안 쓰는 물건으로 이번 달 50만 원 벌어볼 사람?"\nA: "어떻게 하나요?" 댓글 달리면 [당근마켓 수익화 노하우] 줌 특강 개최!`} />
          </div>
          
          <p className="chapter-content" style={{marginTop: '1.5rem'}}>
            상품 만들고 나서 안 팔리면 거기에 투자한 시간은 어떻게 할건가요? 먼저 홍보부터 하고 반응이 오면 당장 결과물을 달라는 사람에게 <strong>“완성되면 가장 먼저 드리겠습니다”</strong> 라고 하세요. 도망갈까봐 걱정되시나요? 안팔릴 상품을 만드는게 더 걱정입니다.
          </p>
          <Bridge text="사람들이 뜨거운 반응을 보였다면, 이제 연락처를 받을 차례입니다." />
        </FadeIn>
      </Section>

      {/* Chapter 4 */}
      <Section>
        <FadeIn>
          <span className="chapter-number">04</span>
          <h2 className="chapter-title">미끼 상품 만들기</h2>
          <p className="chapter-content">반응이 확인되었다면, 연락처(DB)를 수집하기 위한 <strong>'미끼 상품'</strong>을 기획해야 합니다.</p>
          <p className="chapter-content">
            거창할 필요 없습니다. 핵심은 지금 당장 겪고 있는 <strong>'가장 가려운 부분'을 즉각적으로 긁어주는 것</strong>입니다. 
            추가로 명심할 것은 <strong>'즉시성'</strong>입니다. 다운받자마자 10분 내로 읽고 바로 써먹을 수 있어야 합니다. 뜬구름 잡는 마인드셋 내용은 절대 금물입니다.
          </p>
          
          <div className="method-card" style={{marginTop: '2rem'}}>
            <h3 className="method-title"><Palette color="var(--accent)" /> 미끼 상품 포맷 및 예시</h3>
            <ul className="step-list">
              <li className="step-item" style={{borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom:'1rem'}}>
                <strong>1장짜리 치트시트 (PDF/이미지):</strong> "어려운 함수 싹 빼고 내일 당장 쓰는 실무 엑셀 단축키 모음"
              </li>
              <li className="step-item" style={{borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom:'1rem'}}>
                <strong>노션 템플릿 (링크 공유):</strong> "초보자도 무조건 상위 노출되는 블로그 글쓰기 복붙 양식"
              </li>
              <li className="step-item" style={{borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom:'1rem'}}>
                <strong>짧은 튜토리얼 (VOD 미등록 링크):</strong> "개발 모르는 사람도 5분 만에 크롤링 봇 만드는 따라하기 영상"
              </li>
              <li className="step-item">
                <strong>프롬프트 모음집 (텍스트):</strong> "ChatGPT에 복사해서 붙여넣기만 하면 상세페이지가 나오는 프롬프트 5종"
              </li>
            </ul>
          </div>
          <Bridge text="만든 미끼 상품을 어떻게 많은 사람들에게 퍼뜨릴까요?" />
        </FadeIn>
      </Section>

      {/* Chapter 5 */}
      <Section>
        <FadeIn>
          <span className="chapter-number">05</span>
          <h2 className="chapter-title">DB수집을 위한 SNS 마케팅</h2>
          <p className="chapter-content">요즘 제가 주목하는 4가지 플랫폼이 있습니다. 유튜브, 인스타, 스레드, 틱톡 이 4가지의 강력한 공통점은 바로 <strong>알고리즘 기반</strong>이라는 겁니다. 내 컨텐츠를 원하는 사람에게 알아서 배송해 줍니다.</p>
          
          <div className="logos-wrapper" style={{justifyContent: 'center', margin: '3rem 0', gap: '2rem'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem'}}>
              <YoutubeIcon size={56} />
              <span style={{fontWeight:600}}>YouTube</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem'}}>
              <InstagramIcon size={56} />
              <span style={{fontWeight:600}}>Instagram</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem'}}>
              <ThreadsIcon size={56} />
              <span style={{fontWeight:600}}>Threads</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem'}}>
              <TiktokIcon size={56} />
              <span style={{fontWeight:600}}>TikTok</span>
            </div>
          </div>

          <div className="quote-block">
            저는 블로그를 가장 좋아하지만, 대세는 알고리즘 기반 플랫폼이니 이에 집중해서 진행하고 있습니다. 이번 부트캠프 때도 광고는 일절 태우지 않았습니다. 오로지 스레드로만 홍보를 진행 했으며, 10일동안 돈 한푼 들이지 않고 100개의 db를 수집했습니다.
          </div>
          <p className="chapter-content">
            아직 뭘 해야 할지 모르겠다면 <strong>스레드부터 시작하세요. (사실 스레드 컨텐츠를 2분만에 만들어서 자동화 하고 있습니다.)</strong>
          </p>
          <Bridge text="충분한 DB와 신뢰가 쌓였다면, 드디어 본 상품을 만들 때입니다." />
        </FadeIn>
      </Section>

      {/* Chapter 6 */}
      <Section>
        <FadeIn>
          <span className="chapter-number">06</span>
          <h2 className="chapter-title">본 상품 만들기</h2>
          <p className="chapter-content">내가 만들고 싶은 게 아니라 <strong>수강생이 간절히 원하는 상품</strong>을 만들어야 합니다. 수집된 잠재 고객들의 구체적인 고민 데이터를 완벽하게 해결해 줄 내용으로 제작하세요.</p>
          
          <div className="method-card" style={{marginTop: '2rem'}}>
            <h3 className="method-title"><BookOpen color="var(--accent)" /> 추가 고민을 해결하는 본 상품 5가지 예시</h3>
            
            <ExampleCard 
              label="1. 고민: 전자책은 샀는데 의지박약이라 실행이 안 돼요." 
              reaction="👉 본 상품: 매일 과제를 인증하고 피드백 받는 [4주 기수제 밀착 관리반]" />
              
            <ExampleCard 
              label="2. 고민: 블로그 템플릿은 좋은데, 내가 쓴 글이 맞는지 모르겠어요." 
              reaction="👉 본 상품: 한 달간 무제한 첨삭 및 [1:1 피드백 코칭권]" />
              
            <ExampleCard 
              label="3. 고민: 치트시트는 받았는데 제 업무(재무)에 딱 맞는 응용을 못하겠어요." 
              reaction="👉 본 상품: 직무별 맞춤 실무 템플릿 10종 + [응용 라이브 VOD 클래스]" />

            <ExampleCard 
              label="4. 고민: 다이어트 운동법은 아는데 식단 조절이 죽어도 안 돼요." 
              reaction="👉 본 상품: 매일 식단 사진 인증 및 영양사 피드백이 들어가는 [바디프로필 동행반]" />

            <ExampleCard 
              label="5. 고민: 영어회화 인강을 끊었는데 작심삼일로 포기하게 됩니다." 
              reaction="👉 본 상품: 원어민 강사와 주 2회 전화 프리토킹 및 발음 교정 [실전 회화 패키지]" />
          </div>
          <Bridge text="고객의 니즈가 반영된 상품, 어디서 어떻게 판매해야 할까요?" />
        </FadeIn>
      </Section>

      {/* Chapter 7 */}
      <Section>
        <FadeIn>
          <span className="chapter-number">07</span>
          <h2 className="chapter-title">판매 시작 및 상세페이지 전략</h2>
          <p className="chapter-content">상품이 준비되었다면 플랫폼을 세팅하고 <strong>상세페이지</strong>를 작성할 차례입니다. 판매의 성패는 결제창까지 끌고 가는 상세페이지의 설득력에 달려있습니다.</p>
          
          <div className="method-card" style={{marginTop: '2rem'}}>
            <h3 className="method-title" style={{color: 'var(--accent)'}}>💡 플랫폼 세팅 및 판매 극대화 요령</h3>
            <ul className="step-list">
              <li className="step-item">
                <strong>플랫폼 선택:</strong> 가볍고 빠르게 시작하려면 링크 하나로 끝나는 <strong>리틀리(Littly)나 크몽</strong>, 브랜드 퀄리티와 VOD 호스팅이 필요하다면 <strong>아임웹, 라이브클래스</strong>를 활용하세요.
              </li>
              <li className="step-item" style={{background: 'rgba(255,255,255,0.05)', padding: '1rem', paddingLeft: '4rem', borderRadius: '0.5rem', marginTop: '1rem', marginBottom: '1rem'}}>
                <strong style={{color: '#fff'}}>필승 상세페이지 4대 공식:</strong><br/>
                <div style={{marginTop: '0.5rem', fontSize:'1rem'}}>
                  1) <strong>Before/After 전면 배치:</strong> 내가 얼마나 대단한지보다 "내 수강생이 이렇게 변했다"는 후기가 핵심입니다.<br/>
                  2) <strong>환불 보장(Guarantee):</strong> "100% 만족하지 않으면 전액 환불"과 같은 파격적 조건으로 결제 저항을 없애세요.<br/>
                  3) <strong>희소성(Scarcity):</strong> "소수 정예 기수제", "선착순 10명 마감" 등 지금 당장 사야 할 이유를 만드세요.<br/>
                  4) <strong>Q&A (자주 묻는 질문):</strong> 고객이 결제를 망설이는 머릿속의 핑계거리를 Q&A 항목에서 미리 차단하세요.
                </div>
              </li>
            </ul>
          </div>
          <Bridge text="판매가 일어나기 시작했다면, 단가를 극대화할 진짜 게임이 시작됩니다." />
        </FadeIn>
      </Section>

      {/* Chapter 8 */}
      <Section>
        <FadeIn>
          <span className="chapter-number">08</span>
          <h2 className="chapter-title">고단가 판매 전략</h2>
          <p className="chapter-content">결과물을 내는 수강생들의 사례를 무기로 삼아 <strong>압도적인 가치</strong>를 제공하고 단가를 높이세요. 핵심은 분량을 늘리는 게 아니라 <strong>'돈'과 직접적으로 연관 짓는 것</strong>입니다.</p>
          
          <div className="method-card" style={{marginTop: '2rem', borderColor: 'var(--accent)'}}>
            <h3 className="method-title" style={{color: 'var(--accent)'}}>💎 확실한 결과를 보장하는 5가지 고단가 예시</h3>
            
            <div style={{marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
              <strong style={{fontSize: '1.2rem', color: '#fff'}}>1. 엑셀 실무 코칭</strong>
              <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-muted)'}}>배운 함수로 크몽에서 직접 외주를 받아 돈을 버는 법을 코칭하거나, 실무용 VBA 매크로를 짜주고 첫 결과물 납품까지 1:1로 밀착 동행합니다.</p>
            </div>

            <div style={{marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
              <strong style={{fontSize: '1.2rem', color: '#fff'}}>2. SNS 릴스 마케팅 반</strong>
              <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-muted)'}}>수강생 채널 기획부터 첫 영상 떡상, 그리고 <strong>첫 유료 협찬을 받을 때까지</strong> 계정을 같이 굴려주는 '무조건 수익화 관리반'을 운영합니다.</p>
            </div>

            <div style={{marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
              <strong style={{fontSize: '1.2rem', color: '#fff'}}>3. 전자책 작성 마스터 과정</strong>
              <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-muted)'}}>매일 분량 인증 시스템을 운영하고, 플랫폼 심사 통과 후 <strong>통장에 첫 수익금이 꽂힐 때까지</strong> 포기하지 못하게 만드는 동행 코칭권입니다.</p>
            </div>

            <div style={{marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
              <strong style={{fontSize: '1.2rem', color: '#fff'}}>4. 재테크/주식 포트폴리오 리딩</strong>
              <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-muted)'}}>강의만 찍어 파는 것이 아니라, 수강생의 현재 자산 포트폴리오를 1:1로 진단하고 매주 시황 브리핑과 리스밸런싱을 돕는 '월 구독형 밀착 동행'입니다.</p>
            </div>

            <div>
              <strong style={{fontSize: '1.2rem', color: '#fff'}}>5. 스마트스토어 죽은 상권 살리기</strong>
              <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-muted)'}}>매출이 0원인 스토어의 상세페이지와 소싱을 전부 뜯어고쳐주고, <strong>첫 유의미한 매출이 발생할 때까지</strong> CS와 마케팅을 옆에서 짚어주는 컨설팅입니다.</p>
            </div>
          </div>
          <Bridge text="이제 비즈니스의 파이를 키우고, 성장의 한계를 뚫을 차례입니다." />
        </FadeIn>
      </Section>

      {/* Chapter 9 */}
      <Section>
        <FadeIn>
          <span className="chapter-number">09</span>
          <h2 className="chapter-title">확장 전략</h2>
          <p className="chapter-content">안정적인 캐시카우가 만들어졌다면 비즈니스의 볼륨을 키울 단계입니다. 성장의 한계를 뚫는 4가지 확장 방향입니다.</p>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '2rem'}}>
            <div className="method-card" style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem'}}>
              <h3 className="method-title"><ArrowRight color="var(--accent)" /> 1. 수평적 카테고리 확장</h3>
              <p className="chapter-content" style={{fontSize: '1rem', marginBottom: 0}}>
                코어 타겟의 다른 니즈를 채웁니다. 엑셀 강사가 PPT 템플릿, 노션 업무 자동화 등으로 상품군을 넓혀 기존 고객에게 재구매(패키징)를 유도하여 객단가(LTV)를 극대화합니다.
              </p>
            </div>
            
            <div className="method-card" style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem'}}>
              <h3 className="method-title"><Target color="var(--accent)" /> 2. 수직적 확장 (B2B 진출)</h3>
              <p className="chapter-content" style={{fontSize: '1rem', marginBottom: 0}}>
                개인(B2C)을 넘어 기업(B2B)으로 대상을 옮깁니다. 쌓아놓은 후기와 노하우를 바탕으로 기업체 출강, 사내 임직원 특강, 혹은 중소기업 대상 1:1 컨설팅 등 굵직한 단위로 확장합니다.
              </p>
            </div>

            <div className="method-card" style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem'}}>
              <h3 className="method-title"><Rocket color="var(--accent)" /> 3. 소프트웨어 / SaaS 제작</h3>
              <p className="chapter-content" style={{fontSize: '1rem', marginBottom: 0}}>
                내 노하우를 '도구'로 만들어버립니다. 블로그 글쓰기 노하우를 바탕으로 AI 자동 포스팅 프로그램을 개발하거나, 복잡한 재무 계산을 해주는 노션/엑셀 툴을 제작하여 구독형으로 판매합니다.
              </p>
            </div>

            <div className="method-card" style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem'}}>
              <h3 className="method-title"><Users color="var(--accent)" /> 4. 메신저 기반 플랫폼화 (제휴)</h3>
              <p className="chapter-content" style={{fontSize: '1rem', marginBottom: 0}}>
                내가 직접 콘텐츠를 만들지 않습니다. 실력은 최고인데 마케팅을 모르는 다른 전문가의 강의를 <strong>내 DB(카톡채널, 이메일)에 대신 팔아주고 수익을 쉐어</strong>합니다. 나는 하나의 '미디어'이자 '플랫폼'이 되는 것입니다.
              </p>
            </div>
          </div>
          <Bridge text="마지막으로 이 모든 과정을 요약하여 가이드로 정리해 드립니다." />
        </FadeIn>
      </Section>

      {/* Chapter 10 */}
      <Section>
        <FadeIn>
          <span className="chapter-number">10</span>
          <h2 className="chapter-title">실행 가이드 (요약 정리)</h2>
          <p className="chapter-content">지금 당장 컴퓨터를 켜고 다음 순서대로 실행하세요.</p>
          
          <div className="method-card" style={{borderColor: 'var(--accent)', background: 'rgba(15,23,42,0.8)'}}>
            <ul className="step-list" style={{marginTop: 0}}>
              <li className="step-item">
                <strong style={{color:'#fff'}}>STEP 1. 나만의 무기 설정:</strong> A4 용지를 꺼내 '내가 남들보다 조금이라도 더 잘하는 5가지'를 무작정 적어봅니다.
              </li>
              <li className="step-item">
                <strong style={{color:'#fff'}}>STEP 2. 즉각적인 수요 검증:</strong> 블로그, 스레드, 인스타에 "○○ 어려우신 분?" 이라는 글을 딱 하나 올립니다.
              </li>
              <li className="step-item">
                <strong style={{color:'#fff'}}>STEP 3. 미끼 상품 배포:</strong> 댓글이 1개라도 달리면, 가장 급한 불을 꺼주는 5페이지짜리 PDF나 노션 링크를 주말 동안 만들고 이메일/카톡을 남긴 사람에게만 뿌립니다.
              </li>
              <li className="step-item">
                <strong style={{color:'#fff'}}>STEP 4. 소통과 찐팬 확보:</strong> DB가 모이면 그들의 진짜 고민을 깊게 듣고(무료 컨설팅), 그걸 해결해 줄 유료 본 상품 기획안을 잡습니다.
              </li>
              <li className="step-item">
                <strong style={{color:'#fff'}}>STEP 5. 밀착 코칭 판매:</strong> 리틀리에 결제 링크를 달고, PDF 하나 던져주는 게 아니라 무조건 성과를 내주는 '동행 코칭권'을 고단가로 판매합니다.
              </li>
              <li className="step-item">
                <strong style={{color:'#fff'}}>STEP 6. 증명과 확장:</strong> 성공 사례가 나오면 이를 레퍼런스 삼아 가격을 올리고, B2B나 솔루션 제작, 혹은 제휴 마케팅으로 파이프라인을 늘려갑니다.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* Outro */}
      <Section className="cta-section">
        <FadeIn delay={0.2}>
          <Rocket size={64} color="var(--accent)" style={{margin: '0 auto 2rem'}} />
          <h2 className="cta-title">결국, 실행입니다</h2>
          <div className="quote-block" style={{textAlign: 'left', margin: '2rem auto', maxWidth: '600px'}}>
            여기까지 제로 비즈니스의 전체 과정이었습니다.<br/>
            어떠신가요? 방법 자체가 어렵지는 않습니다.<br/>
            다만, 그 과정에서 숱한 시행착오를 겪게 될 것입니다.
          </div>
          <p className="chapter-content" style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
            무엇이든 연습이 필요합니다. 한 번 보고 바로 따라 해서 수익을 낸다면 천재게요? 
            조급한 마음을 버리세요. <strong>저도 여기까지 오는 데 11년이 걸렸습니다.</strong>
          </p>
          <p className="chapter-content" style={{fontSize: '1.2rem', marginBottom: '3rem'}}>
            하지만 여러분들은 그만큼 안 걸리시겠지만, 궁금한 것은 언제든 찾아볼 수 있고 과감히 투자하여 지름길을 살 수도 있는 시대입니다.
          </p>
          <p style={{marginTop: '2rem', color: 'var(--text-muted)', fontSize: '1.2rem'}}>
            진심으로 응원하겠습니다.<br/>
            <strong style={{color: 'var(--text-main)', fontSize: '1.5rem', display: 'inline-block', marginTop: '1rem'}}>- 김테크 드림 -</strong>
          </p>
        </FadeIn>
      </Section>
    </div>
  );
}

export default App;
