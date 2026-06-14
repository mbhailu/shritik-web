import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'Shritik Enterprises LLP — Premium Indian Food Ingredients Exporter';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public', 'logo.png'));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  const products = ['Cashew Kernels', 'Dehydrated Onion', 'Dehydrated Garlic', 'Dehydrated Ginger'];
  const certs = ['FSSAI', 'APEDA', 'IEC', 'ISO', 'Halal', 'Kosher'];

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a472a 0%, #2d6a4f 55%, #1a472a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Gold top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #b8860b, #f0c040, #b8860b)',
            display: 'flex',
          }}
        />

        {/* Main content wrapper */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 80px',
            width: '100%',
          }}
        >
          {/* Logo + Company name row */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '28px',
              marginBottom: '18px',
            }}
          >
            {/* Logo */}
            <img
              src={logoSrc}
              width={110}
              height={110}
              style={{ borderRadius: '16px', objectFit: 'contain', background: 'white', padding: '6px' }}
            />
            {/* Company name */}
            <div
              style={{
                color: '#f0c040',
                fontSize: '56px',
                fontWeight: '700',
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{ display: 'flex' }}>Shritik Enterprises</span>
              <span style={{ display: 'flex', fontSize: '42px', color: 'rgba(240,192,64,0.80)' }}>LLP</span>
            </div>
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: '90px',
              height: '3px',
              background: '#d4a017',
              borderRadius: '2px',
              marginBottom: '20px',
              display: 'flex',
            }}
          />

          {/* Tagline */}
          <div
            style={{
              color: 'rgba(255,255,255,0.90)',
              fontSize: '26px',
              fontWeight: '400',
              textAlign: 'center',
              marginBottom: '36px',
              letterSpacing: '0.2px',
              display: 'flex',
            }}
          >
            Premium Indian Food Ingredients Exporter
          </div>

          {/* Products row */}
          <div
            style={{
              display: 'flex',
              gap: '14px',
              marginBottom: '32px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {products.map((p) => (
              <div
                key={p}
                style={{
                  background: 'rgba(255,255,255,0.11)',
                  border: '1.5px solid rgba(240,192,64,0.42)',
                  borderRadius: '10px',
                  padding: '11px 24px',
                  color: '#ffffff',
                  fontSize: '20px',
                  display: 'flex',
                }}
              >
                {p}
              </div>
            ))}
          </div>

          {/* Certifications row */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            {certs.map((c) => (
              <div
                key={c}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  color: 'rgba(255,255,255,0.62)',
                  fontSize: '16px',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#d4a017',
                    display: 'flex',
                    flexShrink: 0,
                  }}
                />
                <span style={{ display: 'flex' }}>{c}</span>
              </div>
            ))}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                color: 'rgba(240,192,64,0.85)',
                fontSize: '16px',
                fontWeight: '600',
                marginLeft: '6px',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#f0c040',
                  display: 'flex',
                  flexShrink: 0,
                }}
              />
              <span style={{ display: 'flex' }}>30+ Countries Served</span>
            </div>
          </div>
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '22px',
            right: '40px',
            color: 'rgba(255,255,255,0.30)',
            fontSize: '14px',
            display: 'flex',
          }}
        >
          shritikenterprises.com
        </div>

        {/* Gold bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #b8860b, #f0c040, #b8860b)',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
