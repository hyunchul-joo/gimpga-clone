export default function Header() {
  return (
    <div>
      <div className="flex gap-1 text-xs">
        <div className="flex flex-col">
          <div>환율</div>
          <div>1,358.2</div>
        </div>
        <div className="flex flex-col">
          <div>테더(USDT)</div>
          <div>1,410.0</div>
          <div>+0.36%</div>
        </div>
        <div className="flex flex-col">
          <div>BTC 점유율</div>
          <div>55.52%</div>
          <div>+0.39%</div>
        </div>
        <div className="flex flex-col">
          <div>시가총액</div>
          <div>2,939조 6,418억</div>
          <div>-2.46%</div>
        </div>
      </div>
    </div>
  );
}
